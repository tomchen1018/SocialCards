import { call, all } from "redux-saga/effects";
import { loadUsersWatcher } from "./users";

export default function* rootWatchers() {
  yield all([
    call(loadUsersWatcher)
  ]);
}
