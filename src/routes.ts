import { Response, Request } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const { name, duration, instructor } = request.body;
  const aula = CreateCourseService.execute({
    name,
    duration,
    instructor,
  });
  return response.json(aula);
}
