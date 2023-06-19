import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  project_id: yup.string().nullable().required(),
  team_member_id: yup.string().nullable().required(),
});
