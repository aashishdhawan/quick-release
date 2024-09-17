import { ChangeLogsStatusType, FeedbackStatusType } from "@/types";

export const ChangeLogsReleaseActions = Object.freeze({
  published: {
    id: "published",
    title: "Publish Now",
    description: "Publish your change log now",
    btnText: "Publish Changelog Now",
  },
  draft: {
    id: "draft",
    title: "Save as Draft",
    description: "Save as draft and edit in future",
    btnText: "Save as Draft Changelog",
  },
  scheduled: {
    id: "scheduled",
    title: "Schedule",
    description:
      "Schedule your release to publish automatically on specified date",
    btnText: "Schedule Changelog",
  },
});

export const FeedbackStatus = Object.freeze<FeedbackStatusType>({
  IN_REVIEW: {
    id: "IN_REVIEW",
    title: "In-Review",
    textColor: "text-gray-800",
    bgColor: "bg-gray-100",
    bulletColor: "bg-gray-400",
  },
  PLANNED: {
    id: "PLANNED",
    title: "Planned",
    textColor: "text-purple-800",
    bgColor: "bg-purple-100",
    bulletColor: "bg-purple-400",
  },
  IN_PROGRESS: {
    id: "IN_PROGRESS",
    title: "In-Progress",
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
    bulletColor: "bg-yellow-400",
  },
  COMPLETED: {
    id: "COMPLETED",
    title: "Completed",
    textColor: "text-green-800",
    bgColor: "bg-green-100",
    bulletColor: "bg-green-400",
  },
  CLOSED: {
    id: "CLOSED",
    title: "Closed",
    textColor: "text-red-800",
    bgColor: "bg-red-100",
    bulletColor: "bg-red-400",
  },
});

export const FeedbackVisibilityStatus = Object.freeze<FeedbackStatusType>({
  private: {
    id: "private",
    title: "Private",
    textColor: "text-orange-800",
    bgColor: "bg-orange-100",
    bulletColor: "bg-orange-400",
  },
  public: {
    id: "public",
    title: "Public",
    textColor: "text-green-800",
    bgColor: "bg-green-100",
    bulletColor: "bg-green-400",
  },
});

export const ChangeLogsStatus = Object.freeze<ChangeLogsStatusType>({
  published: {
    id: "published",
    title: "Published",
    textColor: "text-green-800",
    bgColor: "bg-green-100",
    bulletColor: "bg-green-400",
  },
  draft: {
    id: "draft",
    title: "Draft",
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
    bulletColor: "bg-yellow-400",
  },
  scheduled: {
    id: "scheduled",
    title: "Scheduled",
    textColor: "text-gray-800",
    bgColor: "bg-gray-100",
    bulletColor: "bg-gray-400",
  },
  archived: {
    id: "archived",
    title: "Archived",
    textColor: "text-red-800",
    bgColor: "bg-red-100",
    bulletColor: "bg-red-400",
  },
});

// select user details from db only which are alow to view publish
export const SelectUserDetailsFromDB = {
  cuid: true,
  firstName: true,
  lastName: true,
  email: true,
  profilePicture: true,
};

export const WEB_DETAILS = {
  name: "Quick Release",
  description: "Manage your release notes better",
  logo: "/logo.svg",
  favicon: "/favicon.svg",
  avtar: "/userAvatar.png",
};
export const ChangeLogIncludeDBQuery = {
  projects: { select: { cuid: true, name: true, slug: true } },
  createdBy: { select: SelectUserDetailsFromDB },
  updatedBy: { select: SelectUserDetailsFromDB },
  releaseTags: {
    select: {
      releaseTag: {
        select: {
          code: true,
          name: true,
        },
      },
    },
  },
  releaseCategories: {
    select: {
      releaseCategory: {
        select: {
          code: true,
          name: true,
        },
      },
    },
  },
  createdById: false,
  updatedById: false,
};

export const FeedbackPostIncludeDBQuery = {
  feedbackBoards: { select: { cuid: true, name: true } },
  createdBy: { select: SelectUserDetailsFromDB },
  createdById: false,
  releaseTags: {
    select: {
      releaseTag: {
        select: {
          code: true,
          name: true,
        },
      },
    },
  },
  feedbackPostVotes: true,
};

export const REVALIDATE_API = 10; // revalidate/cache api response for 60 seconds
