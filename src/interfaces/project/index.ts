import { FeedbackInterface } from 'interfaces/feedback';
import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  sdg_focus: string;
  organization_id: string;
  team_leader_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    feedback?: number;
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  sdg_focus?: string;
  organization_id?: string;
  team_leader_id?: string;
}
