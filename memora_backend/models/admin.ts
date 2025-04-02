export interface AdminRole {
  id: string;
  userId: string;
  role: "moderator" | "admin";
  createdAt: Date;
}

export interface ReportedDream {
  id: string;
  dreamId: string;
  reporterId: string;
  reason: string;
  status: "pending" | "reviewed" | "removed";
  createdAt: Date;
  reviewedAt?: Date;
}
