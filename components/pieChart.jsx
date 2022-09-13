import React from "react";
import "antd/dist/antd.css";
import { Avatar, List } from "antd";
import styles from "../styles/employee.module.css";
import { Pie, measureTextWidth } from "@ant-design/plots";

const PieChart = ({data}) => {

    const renderStatistic = (containerWidth, text, style)=> {
      const { width: textWidth, height: textHeight } = measureTextWidth(
        text,
        style
      );
      const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

      let scale = 1;

      if (containerWidth < textWidth) {
        scale = Math.min(
          Math.sqrt(
            Math.abs(
              Math.pow(R, 2) /
                (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
            )
          ),
          1
        );
      }

      const textStyleStr = `width:${containerWidth}px;`;
      return '';
      // return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      //   scale < 1 ? 1 : "inherit"
      // };">${text}</div>`;
    }
    
    const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 1,
      innerRadius: 0.64,
      meta: {
        value: {
          formatter: (v) => `${v} ¥`,
        },
      },
      label: {
        type: "inner",
        offset: "-50%",
        style: {
          textAlign: "center",
        },
        autoRotate: false,
        content: "{value}",
      },
      statistic: {
        title: {
          offsetY: -4,
          customHtml: ()=>''
        },
        content: {
          offsetY: 4,
          style: {
            fontSize: "32px",
          },
          customHtml: ()=>''
        },
      },
      // 添加 中心统计文本 交互
      interactions: [
        {
          type: "element-selected",
        },
        {
          type: "element-active",
        },
        {
          type: "pie-statistic-active",
        },
      ],
    };

    return <Pie {...config} />
}

export default PieChart;
