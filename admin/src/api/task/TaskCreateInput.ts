import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  bonus?: string | null;
  estimation?: number | null;
  project: ProjectWhereUniqueInput;
  startDate: Date;
  status: "new" | "pending" | "onHold" | "ongoing" | "done";
  title: string;
};
