const Page = ({page, setPageNumber}) => {
  console.log(typeof page)
  return (
    <article onClick={() => setPageNumber(page)}>{page}</article>
  )
}

export default Page