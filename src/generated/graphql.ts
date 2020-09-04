export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  createTask: Task;
  updateTaskStatus: Task;
  updateTaskBody: Task;
};

export type MutationCreateTaskArgs = {
  owner: Scalars["String"];
  title: Scalars["String"];
  taskStatus: Scalars["String"];
  description: Scalars["String"];
};

export type MutationUpdateTaskStatusArgs = {
  id: Scalars["ID"];
  taskStatus: Scalars["String"];
};

export type MutationUpdateTaskBodyArgs = {
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
};

export type Query = {
  getTask: Task;
  allTasks: TaskConnection;
};

export type QueryGetTaskArgs = {
  id: Scalars["ID"];
};

export type QueryAllTasksArgs = {
  nextToken: Maybe<Scalars["String"]>;
};

export type Task = {
  id: Scalars["ID"];
  owner: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  taskStatus: Maybe<Scalars["String"]>;
};

export type TaskConnection = {
  items: Maybe<Array<Maybe<Task>>>;
  nextToken: Maybe<Scalars["String"]>;
};

export enum TaskType {
  Task = "Task",
  Story = "Story",
}
