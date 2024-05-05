import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerCellClickData,
  SchedulerProjectData
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onCellClick?: (data: SchedulerCellClickData) => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
