import { AppRoutes } from "@/.next/types/routes"

const SingleProductPage = async ({ params }: PageProps<AppRoutes>) => {
  const val = await params
  const ID: string = (val as { productID: string }).productID
  console.log({ ID })
  return (
    <div className="bg-black h-full">{ID}</div>
  )
}

export default SingleProductPage