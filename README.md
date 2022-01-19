<p align="center">
  <a href="http://logic-flow.org" target="_blank">
    <img
      src="http://logic-flow.org/new-logo.png"
      alt="LogicFlow logo"
      width="250"
    />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@logicflow/core">
    <img src="https://img.shields.io/npm/v/@logicflow/core" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/@logicflow/core">
    <img src="https://img.shields.io/npm/dm/@logicflow/core" alt="Download">
  </a>
  <a href="https://github.com/didi/LogicFlow/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@logicflow/core" alt="LICENSE">
  </a>
</p>

LogicFlow is a flowchart editing framework that provides a series of functions necessary for flowchart interaction and editing, as well as simple and flexible extension mechanisms such as node customization and plug-ins, so that we can quickly meet the needs of class flowcharts in the business system.

## Features


- 🛠 High scalability
  
  Compatible with the process editing requirements of various product customizations, most modules are implemented in the form of plug-ins, and each module can be freely plugged and unplugged.

- 🚀 Re-execute
  
  Flowcharts can fully express business logic and are not limited by process engines.

- 🎯 Professional
  
  A framework focused on business process diagram editing

## use

### Install

```sh
# npm
$ npm install @logicflow/core @logicflow/extension --save

```

### Code Example

```js
// create container
<div id="container"></div>;

// prepare data
const data = {
  // node
  nodes: [
    {
      id: 21,
      type: 'rect',
      x: 100,
      and: 200,
      text: {
        value: 'rectangular node',
        x: 100,
        and: 200,
      },
    },
    {
      id: 50,
      type: 'circle',
      x: 300,
      and: 400,
      text: {
        value: 'circle node',
        x: 300,
        and: 400,
      },
    },
  ],
  // side
  edges: [
    {
      type: 'polyline',
      sourceNodeId: 50,
      targetNodeId: 21,
    },
  ],
};
// render the canvas
const lf = new LogicFlow({
  container: document.querySelector('#container'),
  width: 700,
  height: 600,
});

lf.render(data);
```

## Documentation

[Official Documentation](http://logic-flow.org)

- [Quick Start](http://logic-flow.org/guide/start.html#installation)
- [Basic Tutorial](http://logic-flow.org/guide/basic/logic-flow.html)
- [Advance Guide](http://logic-flow.org/guide/advance/theme.html)
- [Extension](http://logic-flow.org/guide/extension/extension-components.html)
- [Example](http://logic-flow.org/usage/bpmn.html)

## Core competencies

### Flowchart editor to quickly build

Provides the capabilities necessary for a flowchart editor, which is also the basic capability of LogicFlow:

- Diagram drawing ability. Draw nodes and lines of various shapes based on SVG, and provide basic nodes (rectangles, circles, polygons, etc.) and lines (straight lines, polylines, curves)
- Various interactive capabilities to make the map move. React according to various mouse events (hover, click, drag, etc.) of nodes, lines, and graphs. Such as node dragging, dragging to create edges, line adjustment, double-clicking nodes to edit text, etc.
- Ability to improve editing efficiency. Provides supporting capabilities such as grid, alignment line, previous step, next step, keyboard shortcuts, image zoom in and zoom out, etc. to help users improve editing efficiency
- Provides a wealth of APIs, and the host R&D completes the interaction with LogicFlow by passing parameters and monitoring events through the API

  The following is an example of a flowchart made through the built-in nodes and supporting capabilities of LogicFlow
  ：

    <image src="https://dpubstatic.udache.com/static/dpubimg/eEMT14E7BR/lfexample1.gif" width="500"/>

### Expansion based on business scenarios

When basic capabilities cannot meet business needs, it needs to be expanded based on business scenarios.

- Set the style of all elements on the graph, such as various nodes, lines, anchor points, arrows, size and color of alignment lines, etc., to meet the needs of front-end style adjustment
- API extension. Support for registering custom methods on LogicFlow, such as methods for providing image downloads through API extensions
- Custom nodes, lines. The built-in graphics nodes such as rectangle and circle often cannot meet the actual business requirements, and it is necessary to define nodes with business significance. LogicFlow provides a way for users to customize nodes with custom graphics and business data, such as the "approval" node in the process approval scenario
- Expansion components. LogicFlow provides HTML layer and a series of coordinate transformation logic on SVG layer, and supports registering components in HTML layer. Host R&D can develop components based on any View framework through the LogicFlow API, such as the right-click menu of nodes, control panels, etc.
- Data conversion adapter. The graph data exported by LogicFlow by default may not be suitable for all businesses. At this time, you can use the adapter API to do custom conversion when graph data is input and output from LogicFlow, such as converting to BPMN standard graph data
- Built-in part of the expansion capabilities. Based on the above expansion capabilities, we also provide a separate extension package to store common nodes, components, etc. precipitated under the current business, such as nodes and data adapters oriented to the BPMN specification, and the default menu. Note that extensions can be installed separately and support importing on demand

Based on the above expansion capabilities, front-end R&D can flexibly develop the required nodes and components according to the needs of actual business scenarios. The following are two flowcharts based on LogicFlow's extension capabilities

#### BPMN specification

<image src="https://dpubstatic.udache.com/static/dpubimg/CS6S6q9Yxf/lfexample2.gif" width="500"/>

#### Approval Flow

<image src="https://dpubstatic.udache.com/static/dpubimg/uBeSlMEytL/lfexample3.gif" width="500"/>

#### vue application demo

<image src="https://dpubstatic.udache.com/static/dpubimg/e35cef10-bb7c-4662-a494-f5aac024c092.gif"/>

[Code address](https://github.com/xinxin93/logicflow_vue_demo)
## contact us

### Join WeChat group

Add WeChat account: logic-flow to join the user group

### Join QQ group

<image src="https://dpubstatic.udache.com/static/dpubimg/VMBzV7jhh8/qq.png" width="300"/>

### Contribute code

LogicFlow is open to the outside world, whether it is only to modify the punctuation of the document or to have a major refactoring of the overall function of LogicFlow, we welcome it. For each of your PRs, we will carefully review, reply, and merge them. For details, see [LogicFlow Contribution Guidelines](https://github.com/didi/LogicFlow/blob/master/CONTRIBUTING.md)
