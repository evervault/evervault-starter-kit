import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from '@visx/xychart';

import styles from './Chart.module.css';

const accessors = {
  xAccessor: (d) => new Date(d.x),
  yAccessor: (d) => d.y,
};

export default function Chart({ data }) {
  return (
    <div className={styles.container}>
      <XYChart
        height={300}
        xScale={{ type: 'time' }}
        yScale={{ type: 'linear' }}
      >
        <AnimatedAxis
          orientation='bottom'
          numTicks={5}
          hideAxisLine={true}
          hideTicks={true}
        />
        <AnimatedAxis
          orientation='left'
          numTicks={4}
          hideAxisLine={true}
          hideZero={true}
          hideTicks={true}
        />
        <AnimatedGrid
          columns={false}
          numTicks={4}
          lineStyle={{ stroke: 'var(--grey-30)', strokeLinecap: 'round' }}
        />
        <AnimatedLineSeries
          dataKey='Temperature'
          data={data}
          {...accessors}
          stroke='var(--primary)'
        />
        <Tooltip
          glyphStyle={{ fill: 'var(--primary)' }}
          verticalCrosshairStyle={{ stroke: 'var(--grey-30)', strokeWidth: 1 }}
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div>{accessors.yAccessor(tooltipData.nearestDatum.datum)}°C</div>
          )}
        />
      </XYChart>
    </div>
  );
}
