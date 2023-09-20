import { IMedia } from "@/Types/Media";
import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/redux/api/apiSlice";

export const mediaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get All medias
    getMedias: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/medias?${query}`;
      },
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
        url: `/media`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["top_medias"],
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
} = mediaApi;
