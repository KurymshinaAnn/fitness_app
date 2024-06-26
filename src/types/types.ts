import { FirebaseError } from "firebase/app";

export type NetworkError = {
  code: string;
  message?: string;
};

export function errorFromGeneric(genericError: any): NetworkError {
  return {
    code: "error/generic",
    message: String(genericError),
  };
}

export function errorFromFirebase(firebaseError: FirebaseError): NetworkError {
  return {
    code: firebaseError.code,
    message: firebaseError.message,
  };
}

export type Exercise = {
  name: string;
  quantity: number;
};

export type Workout = {
  _id: string;
  exercises?: Exercise[];
  name: string;
  video: string;
};

export type WorkoutsData = {
  [key: string]: Workout;
};

export type CoursType = {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  workouts: string[];
};

export type CoursesDataType = {
  [key: string]: CoursType;
};

export type CoursesStateType = {
  pickedIDsCourses: string[];
  currentCourseData: null | CoursType;
  currentWorkoutData: null | Workout;
  currentWorkoutIndex: null | number;
  currentExercisesQuantity: number[];
};

export type setCurrentWorkoutType = {
  data: null | Workout;
  index: null | number;
};

export type setExerciseQuantityType = {
  index: number;
  quantity: number;
};

export type SetWorkoutQuantityType = {
  data: number[];
};
