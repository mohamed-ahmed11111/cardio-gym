import { Link } from "@tanstack/react-router";
import { Clock, Timer, Users } from "lucide-react";
import type { ClassSession } from "@/types";

export function ScheduleCard({ session }: { session: ClassSession }) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/50">
      <div className="min-w-0">
        <h3 className="truncate text-base">{session.title}</h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock aria-hidden="true" className="size-3.5 text-accent" />
            {session.time}
          </span>
          <span className="inline-flex items-center gap-1">
            <Timer aria-hidden="true" className="size-3.5" />
            {session.durationMin} دقيقة
          </span>
          <span className="inline-flex items-center gap-1">
            <Users aria-hidden="true" className="size-3.5" />
            {session.spots} مكان
          </span>
        </p>
        <Link
          to="/trainers/$trainerId"
          params={{ trainerId: session.trainerId }}
          className="mt-2 inline-block text-xs font-bold text-accent hover:underline"
        >
          {session.trainerName}
        </Link>
      </div>
      <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] font-bold">
        {session.type}
      </span>
    </article>
  );
}