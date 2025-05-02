export class ResourceNotFoundError extends Error {
  constructor() {
    super("Reference not found");
  }
}
