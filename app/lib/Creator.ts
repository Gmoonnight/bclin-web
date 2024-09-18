import { Dispatch, MutableRefObject, SetStateAction } from "react";
import CS from "./states/CS";
import CT from "./thinking/common/CT";

export default interface Creator {
    cS : CS, 
    cSR : MutableRefObject<CS>, 
    cSRUpdate : Dispatch<SetStateAction<CS>>,

    cTR : MutableRefObject<CT>, 
}