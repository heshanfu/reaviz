import ReactMarkdown from 'react-markdown';
import React from 'react';
import { storiesOf } from '@storybook/react';

import * as whyDoc from '../docs/getting-started/why.md';
import * as installingDoc from '../docs/getting-started/installing.md';
import * as developingDoc from '../docs/getting-started/developing.md';
import * as cssDoc from '../docs/getting-started/css-vars.md';
import * as contribDoc from '../docs/CONTRIBUTING.md';

import * as areaChartDoc from '../docs/charts/area-chart.md';
import * as barChartDoc from '../docs/charts/bar-chart.md';
import * as lineChartDoc from '../docs/charts/line-chart.md';
import * as pieChartDoc from '../docs/charts/pie-chart.md';
import * as sparklineDoc from '../docs/charts/sparklines.md';
import * as mapDoc from '../docs/charts/map.md';
import * as sankeyDoc from '../docs/charts/sankey.md';
import * as hiveDoc from '../docs/charts/hive-plot.md';
import * as scatterPlot from '../docs/charts/scatter-plot.md';
import * as bubbleChart from '../docs/charts/bubble-chart.md';

import * as customChartsDoc from '../docs/advanced/custom-charts.md';
import * as animationsDoc from '../docs/advanced/animations.md';

const Markdown = ({ source }) => (
  <div className="doc-container">
    <ReactMarkdown source={source} />
  </div>
);

storiesOf('Documentation/Getting Started', module)
  .add('Why', () => <Markdown source={whyDoc} />)
  .add('Installing', () => <Markdown source={installingDoc} />)
  .add('Developing', () => <Markdown source={developingDoc} />)
  .add('CSS Variables', () => <Markdown source={cssDoc} />)
  .add('Contributing', () => <Markdown source={contribDoc} />);

storiesOf('Documentation/Charts', module)
  .add('Area Chart', () => <Markdown source={areaChartDoc} />)
  .add('Bar Chart', () => <Markdown source={barChartDoc} />)
  .add('Line Chart', () => <Markdown source={lineChartDoc} />)
  .add('Map', () => <Markdown source={mapDoc} />)
  .add('Pie Chart', () => <Markdown source={pieChartDoc} />)
  .add('Sparklines', () => <Markdown source={sparklineDoc} />)
  .add('Sankey Diagram', () => <Markdown source={sankeyDoc} />)
  .add('Hive Plot', () => <Markdown source={hiveDoc} />)
  .add('Scatter Plot', () => <Markdown source={scatterPlot} />)
  .add('Bubble Chart', () => <Markdown source={bubbleChart} />);

storiesOf('Documentation/Advanced', module)
  .add('Custom Charts', () => <Markdown source={customChartsDoc} />)
  .add('Animations', () => <Markdown source={animationsDoc} />);
