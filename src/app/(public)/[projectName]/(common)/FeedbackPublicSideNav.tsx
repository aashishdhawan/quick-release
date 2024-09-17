"use client";

import { useFeedbackPostContext } from "@/app/context/FeedbackPostContext";
import { IFeedbackBoard } from "@/interfaces";
import { classNames } from "@/lib/utils";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useMemo } from "react";

type FeedbackPublicSideNavPropsType = {
  feedbackBoards: IFeedbackBoard[];
};

const FeedbackPublicSideNav: React.FC<FeedbackPublicSideNavPropsType> = ({
  feedbackBoards,
}) => {
  const router = useRouter();
  const { projectName } = useParams();

  const pathname = useMemo(() => {
    if (
      usePathname().split("/").pop() !== "feedbacks" &&
      usePathname().includes("feedbacks")
    ) {
      return usePathname().split("/").slice(0, -1).join("/");
    }

    if (
      usePathname().split("/").pop() !== "roadmap" &&
      usePathname().includes("roadmap")
    ) {
      return usePathname().split("/").slice(0, -1).join("/");
    }
    return usePathname();
  }, [usePathname()]);
  const searchParams = useSearchParams();
  const search = useMemo(() => {
    const data = searchParams.get("search");
    if (data && data !== "") {
      return decodeURIComponent(searchParams.get("search") as string);
    }
    return null;
  }, [searchParams]);

  const board = useMemo(() => {
    const data = searchParams.get("board");
    if (data && data !== "") {
      return decodeURIComponent(searchParams.get("board") as string);
    }
    return feedbackBoards.find((board) => board.isDefault)?.name || null;
  }, [searchParams]);
  const sort = useMemo(() => {
    const data = searchParams.get("sort");
    if (data && data !== "") {
      return decodeURIComponent(searchParams.get("sort") as string);
    }
    return null;
  }, [searchParams]);
  const { feedbackSideNav, setFeedbackSideNav, getAllPublicFeedbackPosts } =
    useFeedbackPostContext();

  const updateQueryParams = (
    board: string | null,
    search: string | null,
    sort: string | null
  ) => {
    if (!board && !search) {
      return router.push(pathname);
    }

    let queryParams = "";
    if (board) {
      queryParams += `board=${board}`;
    }

    if (search) {
      if (queryParams) queryParams += "&";
      queryParams += `search=${search}`;
    }
    router.push(`${pathname}?${queryParams}`);
  };
  const onSelectBoard = (boardName: string) => {
    if (boardName) {
      updateQueryParams(boardName, search, sort);
    }
  };

  return (
    <aside
      className={classNames(
        "xl:order-first xl:block xl:flex-shrink-0",
        "xl:relative xl:h-full  xl:overflow-y-hidden xl:transition-none xl:translate-x-0 xl:w-96",
        "fixed top-0 left-0 z-40 lg:z-0 h-screen sm:overflow-y-auto transition-transform w-screen bg-black bg-opacity-35",
        !feedbackSideNav && "-translate-x-full"
      )}
      onClick={() => setFeedbackSideNav(false)}
    >
      <div className="relative flex h-full sm:w-96 flex-col border-r border-gray-200 bg-gray-100">
        <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <div className="flex border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
            <span
              className="w-full py-3 text-sm font-medium"
              data-svelte-h="svelte-19a70nh"
            >
              {"Feedback Boards"}
            </span>
          </div>
        </div>
        <nav
          className="min-h-0 flex-1 overflow-y-auto"
          aria-label="Message list"
          data-svelte-h="svelte-3mai4c"
        >
          <ul
            className="divide-y divide-gray-200 border-b border-gray-200"
            role="list"
          >
            {feedbackBoards.map((boardDetails) => (
              <li
                key={boardDetails.id}
                onClick={() => onSelectBoard(boardDetails.name!)}
                className={classNames(
                  "relative flex gap-2  px-6 py-5 hover:bg-gray-200 border-b border-gray-200 hover:border-b focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-pointer",
                  boardDetails.name === board ? "bg-gray-200" : "bg-white"
                )}
                data-svelte-h="svelte-1lq1qyf"
              >
                <p className="text-sm">{boardDetails.name}</p>
                {boardDetails.isDefault && (
                  <span
                    className={classNames(
                      `inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium`,
                      "bg-green-100 text-green-800"
                    )}
                  >
                    {"Default"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default FeedbackPublicSideNav;
