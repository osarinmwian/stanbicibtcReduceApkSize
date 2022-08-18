import {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { useWindowDimensions } from "react-native";

import { Backdrop } from "./Backdrop";

export type ModalProps = Omit<BottomSheetModalProps, "snapPoints"> & {
  children?: React.ReactNode;
  componentHeight?: number;
  onBackdropPress?: () => void;
  points?: (number | string)[];
  type?: "bottom" | "centered";
};

function Modal(
  {
    children,
    componentHeight,
    onBackdropPress,
    type = "bottom",
    points = type === "centered" ? ["1%"] : ["50%"],
    ...rest
  }: ModalProps,
  ref: ForwardedRef<BottomSheetModalMethods>,
) {
  const snapPoints = useMemo(() => points, [points]);
  const { height } = useWindowDimensions();
  const bottomInset =
    type === "centered"
      ? (height + (componentHeight as number)) / 2
      : undefined;

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop
        onPress={() => {
          if (onBackdropPress) {
            onBackdropPress();
            return;
          }
          // @ts-expect-error current not defined on ref
          ref?.current.dismiss();
        }}
        {...props}
      />
    ),
    [ref, onBackdropPress],
  );

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      bottomInset={bottomInset}
      detached={type === "centered"}
      handleComponent={type === "centered" ? null : undefined}
      ref={ref}
      snapPoints={snapPoints}
      style={{ flex: 1, }}
      {...rest}
    >
      {children}
    </BottomSheetModal>
  );
}

export default forwardRef(Modal);
