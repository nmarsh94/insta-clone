import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggestions for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{ color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="suggesteduser1" followers={1000} avatar="https://bit.ly/dan-abramov" />
        <SuggestedUser name="suggesteduser2" followers={2000} avatar="https://bit.ly/ryan-florence" />
        <SuggestedUser name="suggesteduser3" followers={3000} avatar="https://bit.ly/code-beast" />

        <Box 
            fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2024 Built By{" "}
                <Link href="https://www.linkedin.com/in/nicolasmarsh/" target="_blank"
                    color={"blue.500"} fontSize={14}>
                        Nico Marsh
                </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers