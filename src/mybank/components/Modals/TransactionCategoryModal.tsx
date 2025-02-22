import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, useState, VFC } from "react";
import { useTranslation } from "react-i18next";

import { data } from "@/mybank/screens/pfm/PfmMainScreen";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { CategoryButton } from "../Buttons/CategoryButton";

type TransactionCategoryModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

export const TransactionCategoryModal: VFC<TransactionCategoryModalProps> = (
  props,
) => {
  const snapPoints = useMemo(() => ["85%", "85%"], []);
  const [activeTransactionCategoryId, setActiveTransactionCategoryId] =
    useState<number | undefined>(1);
  const { t } = useTranslation();
  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView>
          <Box p="md">
            <Box mb="md">
              <Text fontVariant="h6" fontWeight="bold">
                {t("pfm.changeTrasactionCategory")}
              </Text>
              <Text color="lightGrey" fontVariant="caption" fontWeight="bold">
                {t("pfm.selectCategoryFromList")}
              </Text>
            </Box>

            {data.map((dataItem, index) => (
              <Box key={dataItem.id} mb="md">
                <CategoryButton
                  {...dataItem}
                  hideSubtitle
                  onPress={() => setActiveTransactionCategoryId(dataItem.id)}
                  rightComponent={
                    <Box px="sm">
                      {dataItem.id === activeTransactionCategoryId ? (
                        <IconVector name="check-circle-checked" />
                      ) : (
                        <IconVector name="check-circle-unchecked" />
                      )}
                    </Box>
                  }
                />
              </Box>
            ))}
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            containerProps={{ flex: 1 }}
            label="CONTINUE"
            labelProps={{ color: "whiteColor", fontVariant: "caption" }}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};
