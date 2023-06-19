import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  sdg_focus: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  team_leader_id: yup.string().nullable().required(),
});
