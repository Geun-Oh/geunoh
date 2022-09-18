type belongType = "soldier" | "navy" | "airForce" | "";

export interface User {
  id: string;
  displayName: string;
  email: string;
  belong: belongType;
}
