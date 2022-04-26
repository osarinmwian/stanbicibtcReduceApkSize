import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text, TextProps } from "@/shared/components/Typography";

type ConfirmLoanRequestModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
};

type ListItemProps = {
  title: string;
  amount: string;
  titleProps?: TextProps;
  amountProps?: TextProps;
  containerProps?: BoxProps;
};

const ListItem: VFC<ListItemProps> = (props) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    mb="xs"
    {...props.containerProps}
  >
    <Text fontVariant="caption" {...props.titleProps}>
      {props.title}
    </Text>
    <Text fontVariant="caption" {...props.amountProps}>
      {props.amount}
    </Text>
  </Box>
);

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const ConfirmLoanRequestModal: VFC<ConfirmLoanRequestModalProps> = (props) => {
  const snapPoints = useMemo(() => ["85%", "85%"], []);

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
                Confirm Loan Request
              </Text>
              <Text color="lightGrey" fontVariant="caption" fontWeight="bold">
                Continue with request
              </Text>
            </Box>

            <Box mb="md">
              <Box backgroundColor="confirmCard" borderRadius="sm" p="md">
                <ListItem amount="N200" title="Loan amount" />
                <ListItem amount="N200" title="New loan amount" />
                <ListItem amount="N200" title="Total loan repayment" />
                <ListItem
                  amount="N200"
                  amountProps={{
                    fontWeight: "bold",
                  }}
                  title="Monthly repayment"
                />
                <ListItem
                  amount="N200"
                  amountProps={{
                    fontWeight: "bold",
                  }}
                  title="Tenure"
                />
                <Text fontVariant="h6" mb="sm" mt="lg">
                  CHARGES
                </Text>
                <ListItem amount="N200" title="Insurance fee" />
                <ListItem amount="N200" title="Management fee" />
                <ListItem amount="N200" title="VAT fee" />
              </Box>
            </Box>
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

export { ConfirmLoanRequestModal };
