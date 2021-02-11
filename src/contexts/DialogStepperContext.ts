import React from "react";
import Video from "src/entities/video.entity";

const DialogStepperContext = React.createContext<{
  activeStep: 0 | 1;
  course: { title: string };
  courseError: { titleError: string };
  setCourseError: React.Dispatch<
    React.SetStateAction<{
      titleError: string;
    }>
  >;
  videos: Video[];
  setValues: React.Dispatch<
    React.SetStateAction<{
      course: {
        title: string;
      };
      videos: Video[];
    }>
  >;
  setActiveStep: React.Dispatch<
    React.SetStateAction<0 | 1>
  >;
  reset: () => void;
}>({
  activeStep: 0,
  course: { title: "" },
  courseError: { titleError: "" },
  setCourseError: () => {},
  videos: [],
  setValues: () => {},
  setActiveStep: () => {},
  reset: () => {},
});
export default DialogStepperContext;