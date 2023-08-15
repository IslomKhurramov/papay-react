import { createSelector } from "reselect";
import { AppRooteState } from "../../../types/screen";

const selectMemberPage = (state: AppRooteState) => state.memberPage;

export const retrieveChosenMember = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMember
);
export const retrieveChosenMemberBoArticles = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenMemberBoArticles
);

export const retrieveChosenSingleBoArticle = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.chosenSingleBoArticle
);

export const retrieveMemberFollowers = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowers
);

export const retrieveMemberFollowings = createSelector(
  selectMemberPage,
  (MemberPage) => MemberPage.memberFollowings
);
