import { status } from './type'

export const colorStatus = {
  [status.CANCELLED] : {
    backgroundColor: "rgba(75, 75, 75, 0.27)",
    color: "#4B4B4B"
  },
  [status.FAILED]: {
    backgroundColor: "rgba(255, 0, 0, 0.27)",
    color: "#FF0000"
  },
  [status.LIVE]: {
    backgroundColor: "rgba(36, 255, 0, 0.27)",
    color: "#007D0D"
  },
  [status.SUCCESS]: {
    backgroundColor: "rgba(0, 71, 255, 0.27)",
    color: "#0047FF"
  },
  [status.UPCOMING]: {
    backgroundColor: "rgba(255, 195, 0, 0.25)",
    color: "#FFC300"
  }
}