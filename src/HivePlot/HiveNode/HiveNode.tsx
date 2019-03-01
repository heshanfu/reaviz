import React from 'react';
import classNames from 'classnames';
import { Node, degrees } from '../utils';
import * as css from './HiveNode.module.scss';

interface HiveNodeProps {
  angle: (...args: any[]) => any;
  radius: (...args: any[]) => any;
  color: (...args: any[]) => any;
  node: Node;
  active?: boolean;
  disabled?: boolean;
  onClick: (...args: any[]) => any;
  onMouseOver: (...args: any[]) => any;
  onMouseOut: (...args: any[]) => any;
}

export class HiveNode extends React.Component<HiveNodeProps, {}> {
  render() {
    const {
      angle,
      radius,
      node,
      color,
      onClick,
      onMouseOver,
      onMouseOut,
      active,
      disabled
    } = this.props;

    // If the size exists on the node, use it to specify the node size.
    // Otherwise, calculate a relative size using the node count.
    let size = node.size;
    if (size === undefined) {
      size = node.count || 0;
    }

    return (
      <circle
        className={classNames(css.node, {
          [css.inactive]: !active
        })}
        transform={`rotate(${degrees(angle(node.x))})`}
        cx={radius(node.y)}
        r={size}
        style={{ cursor: disabled ? 'initial' : 'cursor' }}
        fill={color(node.x)}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    );
  }
}
