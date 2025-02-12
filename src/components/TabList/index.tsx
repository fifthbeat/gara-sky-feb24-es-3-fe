import React from "react";
import { useTab, useTabList } from "@react-aria/tabs";
import { TabListState, useTabListState } from "@react-stately/tabs";
import Text from "@components/Atoms/Text";
import cn from "classnames";
import "./styles.css";

export type TabItem = { key: string; title: string; icon: React.ReactNode; isDisabled?: boolean };

type Props = {
  items: Array<TabItem>;
  selectedKey?: string;
};

export const TabList = ({ items, selectedKey, ...props }: Props) => {
  const ref = React.useRef(null);
  const state = useTabListState<TabItem>(props);
  const { tabListProps } = useTabList<TabItem>(props, state, ref);

  return (
    <div className="tab-container">
      <div {...tabListProps} ref={ref} className="tab-list">
        {items.map((item) => (
          <Tab key={item.key} item={item} state={state} selectedKey={selectedKey} />
        ))}
      </div>
    </div>
  );
};

type TabProps = {
  item: TabItem;
  state: TabListState<TabItem>;
  selectedKey?: string;
};

const Tab = ({ item, state, selectedKey }: TabProps) => {
  const ref = React.useRef(null);
  const { key } = item;
  const { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);

  return (
    <div
      {...tabProps}
      ref={ref}
      className={cn("tab", { selected: isSelected || selectedKey === key, disabled: isDisabled || item.isDisabled })}
    >
      {item.icon}
      <Text variant="small-text">{item.title}</Text>
    </div>
  );
};
