import { Box, Flex, Spinner } from "@chakra-ui/react"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase/firebase"
import Navbar from "../../components/Navbar/Navbar"

/* instead of adding the Sidebar to every page, we can add it to only the PageLayout
   component and wrap the children with it. This way, we can have a sidebar on 
   every page except the Authpage */

const PageLayout = ({children}) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSideBar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  if (!user )

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
        {/* sidebar on the left */}
        { pathname !== "/auth" ? (
            <Box w={{base:"70px", md:"240px"}}>
                <Sidebar />
            </Box>
            ) : null }
        {/* Navbar */}
        {canRenderNavbar ? <Navbar /> : null}
        {/* the page content on the right */}
        <Box flex={1} width={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)"}} mx={"auto"}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir="column" h="100vh" alignItems={"center"} justifyContent={"center"}>
      <Spinner size="xl" />
    </Flex>
  );
}