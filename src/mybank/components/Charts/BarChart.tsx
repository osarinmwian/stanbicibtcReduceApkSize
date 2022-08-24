import React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { palette } from "@/shared/theme/palette";

export const BarChartUI = () => {
  const barData = [
    {
      value: 25,
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: palette.pfmgraphgreen,
      label: "Week 1",
    },
    { value: 50, frontColor: "#ED6665" },
    {
      value: 50,
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: palette.pfmgraphgreen,
      label: "Week 2",
    },
    { value: 10, frontColor: palette.pfmgraphorange },
    {
      value: 60,
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: palette.pfmgraphgreen,
      label: "Week 3",
    },
    { value: 60, frontColor: palette.pfmgraphorange },
    {
      value: 20,
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: palette.pfmgraphgreen,
      label: "Week 4",
    },
    { value: 38, frontColor: palette.pfmgraphorange },
    {
      value: 20,
      spacing: 2,
      labelWidth: 50,
      labelTextStyle: { color: "gray" },
      frontColor: palette.pfmgraphgreen,
      label: "Week 5",
    },
    { value: 38, frontColor: palette.pfmgraphorange },
  ];

  return (
    <View>
      <BarChart
        barWidth={20.7}
        data={barData}
        maxValue={100}
        // hideRules
        noOfSections={5}
        spacing={21}
        xAxisThickness={0}
        yAxisTextStyle={{ color: "gray" }}
        yAxisThickness={0}
      />
    </View>
  );
};
