import {
  getStoryblokApi, StoryblokComponent
} from "@storyblok/react/rsc";


export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
