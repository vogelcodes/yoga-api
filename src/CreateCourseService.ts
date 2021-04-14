interface ICourse {
  name: string;
  duration: number;
  instructor: string;
}

class CreateCourseService {
  execute({ name, duration, instructor }: ICourse) {
    const course = {
      name,
      duration,
      instructor,
    };
    return course;
  }
}

export default new CreateCourseService();
