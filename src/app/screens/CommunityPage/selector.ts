import { createSelector } from "@reduxjs/toolkit";
import { AppRooteState } from "../../../types/screen";
import { CommunityPage } from ".";

const selectCommunityPage = (state: AppRooteState) => state.communityPage;
export const retrieveTargetBoArticles = createSelector(
  selectCommunityPage,
  (CommunityPage) => CommunityPage.targetBoArticles
);
