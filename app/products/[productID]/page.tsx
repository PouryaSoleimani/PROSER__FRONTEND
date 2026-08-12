import { AppRoutes } from "@/.next/types/routes"

const SingleProductPage = async ({ params }: PageProps<AppRoutes>) => {
  const val = await params
  const ID: string = (val as { productID: string }).productID
  console.log({ ID })
  return (
    <div className="min-h-screen grid place-items-center">{ID}</div>
  )
}

export default SingleProductPage