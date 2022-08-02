import { palette } from '@/shared/theme/palette';
import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

export const BarChartUI = () => {
    const barData = [
        {
            value: 25,
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: palette.pfmgraphgreen,
        },
        { value: 50, frontColor: '#ED6665' },
        {
            value: 50,
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: palette.pfmgraphgreen,

        },
        { value: 10, frontColor: palette.pfmgraphorange },
        {
            value: 60,
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: palette.pfmgraphgreen,

        },
        { value: 60, frontColor: palette.pfmgraphorange },
        {
            value: 20,
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: palette.pfmgraphgreen,

        },
        { value: 38, frontColor: palette.pfmgraphorange },
        {
            value: 20,
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: palette.pfmgraphgreen,
        },
        { value: 38, frontColor: palette.pfmgraphorange },
    ];

    return (
        <View>
            <BarChart
                data={barData}
                barWidth={20.7}
                spacing={21}

                // hideRules
                xAxisThickness={0}
                yAxisThickness={0}
                yAxisTextStyle={{ color: 'gray' }}
                noOfSections={5}
                maxValue={100}
            />
        </View>
    );
};