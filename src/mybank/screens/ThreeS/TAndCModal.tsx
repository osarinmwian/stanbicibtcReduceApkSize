import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ForwardedRef, forwardRef } from "react";
import { ScrollView } from "react-native";

import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { heightPixel } from "@/shared/utils/functions";

function EditModal(
  { child }: { child: unknown },
  ref: ForwardedRef<BottomSheetModalMethods>,
) {
  return (
    <Modal
      componentHeight={heightPixel(723)}
      handleComponent={null}
      ref={ref}
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}
      type="centered"
    >
      <Box
        backgroundColor="mainBackground"
        borderRadius="md"
        borderWidth={0}
        height={heightPixel(723)}
        justifyContent="space-between"
        paddingHorizontal="md"
        paddingTop="md"
      >
        <BaseButton
          backgroundColor="cardSecondary"
          borderRadius="md"
          height={28}
          leftIcon="close"
          width={28}
        />
        <Text variant="medium16">Terms and conditions</Text>
        <ScrollView>
          <Text textAlign="left" variant="regular14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
            proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et.
            Facilisis lectus eu vulputate fames. Neque montes, diam duis amet,
            volutpat, ut tellus. Sed posuere semper pellentesque purus viverra
            odio. Enim risus, sit magna id vulputate augue integer platea
            blandit. Massa hac nisi tortor venenatis vitae diam non bibendum.
            {"\n"}
            {"\n"}
            Facilisi tortor pharetra, feugiat odio libero iaculis. Odio eget
            duis tempor ante donec nec consequat, tincidunt dignissim. Gravida
            suspendisse id morbi egestas eget risus sagittis. Et at lorem a
            quis. Amet, risus id nunc non amet massa elit netus donec. Id amet,
            cum lacinia fringilla tellus sagittis nisi sit at. Habitasse nunc
            malesuada integer at egestas nibh. Aliquam ultricies quis
            scelerisque viverra. Purus congue risus urna elit. Gravida donec
            cras dictum non dui, ac ut in.Neque montes, diam duis amet,
            volutpat,{" "}
          </Text>
        </ScrollView>
        <Box paddingBottom="xs">
          <PrimaryButton
            justifyContent="center"
            label="CONTINUE"
            labelProps={{ color: "textColorInverted" }}
            labelVariant="medium12"
            marginBottom="md"
            maxHeight={heightPixel(38)}
            padding="none"
            paddingVertical="md"
            width="100%"
          />
          <PrimaryButton
            backgroundColor="cardSecondary"
            justifyContent="center"
            label="CANCEL"
            labelProps={{ color: "textTint" }}
            labelVariant="medium12"
            marginBottom="md"
            maxHeight={heightPixel(38)}
            paddingVertical="md"
            width="100%"
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default forwardRef(EditModal);
