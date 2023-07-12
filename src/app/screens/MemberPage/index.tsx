import { Route, Switch, useRouteMatch } from "react-router-dom";
import React from "react";
import { VisitOtherPage } from "./VisitOtherPage";
import { VisitMyPage } from "./VisitMayPage";
import "../../../css/my_page.css";

export function MemberPage() {
  let member = useRouteMatch();
  console.log(member);
  return (
    <div className="member_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage />
        </Route>

        <Route path={`${member.path}/`}>
          <VisitMyPage />
        </Route>
      </Switch>
    </div>
  );
}
