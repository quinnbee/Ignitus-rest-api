import TeamMembers from '../Models/teamMembersModel.js';
import responseHandler from '../Utils/responseHandler.js';

export const fetchAllTeamMembers = (req, res) => {
  TeamMembers
    .find({})
    .then(teamMember => responseHandler.success(res, teamMember))
    .catch(() => responseHandler.error(res, 'Failed to fetch all TeamMembers', 404));
};

export const fetchTeamMember = (req, res) => {
  TeamMembers
    .findById(req.params.id)
    .then(teamMember => responseHandler.success(res, teamMember))
    .catch(() => responseHandler.error(res, 'Failed to fetch TeamMember', 404));
};

export const createTeamMember = (req, res) => {
  TeamMembers
    .create(req.body)
    .then(teamMember => responseHandler.success(res, teamMember))
    .catch(() => responseHandler.error(res, 'Failed to create TeamMember', 400));
};

export const updateTeamMember = (req, res) => {
  TeamMembers
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedTeamMember => responseHandler.success(res, updatedTeamMember))
    .catch(() => responseHandler.error(res, 'Failed to update TeamMember', 404));
};

export const deleteTeamMember = (req, res) => {
  TeamMembers
    .findByIdAndRemove(req.params.id)
    .then(responseFromDeleteQuery => responseHandler.success(res, responseFromDeleteQuery))
    .catch(() => responseHandler.error(res, 'Failed to delete TeamMember', 404));
};