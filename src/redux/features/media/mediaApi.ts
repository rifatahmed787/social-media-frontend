import { IMedia } from "@/Types/Media";
import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const mediaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get All medias
    getMedias: builder.query({
      query: () => `/medias`,
      providesTags: ["medias"],
    }),

    //Get latest-three
    getLatestMedias: builder.query({
      query: () => `/medias/top-three`,
      providesTags: ["top_medias"],
    }),

    //Get  media details
    getMediaDetails: builder.query({
      query: (mediaID) => {
        return `/medias/${mediaID}`;
      },
      providesTags: ["media"],
    }),

    // Add Media
    addMedia: builder.mutation({
      query: (data: IMedia) => ({
        url: `/medias`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["top_medias"],
    }),

    // Toggle like status
    toggleLikeMedia: builder.mutation({
      query: ({ mediaID }) => ({
        url: `/medias/toggle-like/${mediaID}`,
        method: "PATCH",
      }),
      invalidatesTags: ["medias", "media"],

      // async onQueryStarted({ mediaID }, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data: media_data } = await queryFulfilled;

      //     if (media_data) {
      //       // Handle the response data if needed.
      //     }

      //     // Update the query data for the specific media item.
      //     dispatch(
      //       mediaApi.util.updateQueryData(
      //         "getMediaDetails",
      //         mediaID,
      //         (draft) => {
      //           // Toggle the like status in the media data.
      //           const existingLikeIndex = draft.like.findIndex(
      //             (like) => like.userId === user?._id
      //           );

      //           if (existingLikeIndex !== -1) {
      //             // Remove the user's like if it exists.
      //             draft.like.splice(existingLikeIndex, 1);
      //           } else {
      //             // Add the user's like if it doesn't exist.
      //             draft.like.push({
      //               userId: user?._id,
      //               userName: user?.userName,
      //               userImage: user?.userImage,
      //             });
      //           }
      //         }
      //       )
      //     );
      //   } catch {
      //     //
      //   }
      // },
    }),

    //   delete media
    deleteMedia: builder.mutation({
      query: ({ mediaID }) => ({
        url: `/medias/${mediaID}`,
        method: "DELETE",
      }),

      invalidatesTags: ["top_medias"],

      async onQueryStarted({ mediaID }, { dispatch, queryFulfilled }) {
        try {
          const { data: media_data } = await queryFulfilled;

          // const patchResult =
          if (media_data) {
            //
          }
          dispatch(
            mediaApi.util.updateQueryData(
              "getMediaDetails",
              mediaID,
              (draft) => {
                return draft.filter(
                  (item: {
                    data: {
                      _id: string;
                    };
                  }) => item.data?._id != mediaID
                );
              }
            )
          );
        } catch {
          //
        }
      },
    }),

    // editmedia
    editMedia: builder.mutation({
      query: ({ mediaID, media_data }) => ({
        url: `/medias/${mediaID}`,
        method: "PATCH",
        body: { ...media_data },
      }),
      invalidatesTags: ["medias"],

      async onQueryStarted(
        { mediaID, media_data },
        { dispatch, queryFulfilled }
      ) {
        // test part
        if (!media_data) {
          //
        }

        try {
          const { data: media_data } = await queryFulfilled;

          const updatedMedia = media_data;

          // const patchResult =

          dispatch(
            mediaApi.util.updateQueryData(
              "getMediaDetails",
              mediaID,
              (draft) => {
                Object.assign(draft, updatedMedia);
              }
            )
          );
        } catch {
          //
        }
      },
    }),
  }),
});

export const {
  useGetMediasQuery,
  useGetMediaDetailsQuery,
  useAddMediaMutation,
  useDeleteMediaMutation,
  useEditMediaMutation,
  useGetLatestMediasQuery,
  useToggleLikeMediaMutation,
} = mediaApi;
