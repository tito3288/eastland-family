import { cosmeticDetails } from "./cosmetic";
import { endodonticDetails } from "./endodontic";
import { periodontalDetails } from "./periodontal";
import { preventionDetails } from "./prevention";
import { restorativeDetails } from "./restorative";
import { surgicalDetails } from "./surgical";

export const procedureDetails = [
  ...preventionDetails,
  ...cosmeticDetails,
  ...periodontalDetails,
  ...restorativeDetails,
  ...surgicalDetails,
  ...endodonticDetails,
];

export type { DetailSection, ProcedureDetail } from "./types";
