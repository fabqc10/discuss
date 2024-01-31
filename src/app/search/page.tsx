import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchParamsProps {
    searchParams: {
        term: string
    }
}

const SearchPage = ({searchParams}:SearchParamsProps) => {
    const {term} = searchParams;
    if(!term){
        redirect("/");
    }
  return (
    <div>
        <PostList fetchData={()=>fetchPostsBySearchTerm(term)}/>
    </div>
  )
}

export default SearchPage