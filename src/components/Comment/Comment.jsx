import { Avatar, Flex, Text } from "@chakra-ui/react"

const Comment = ({createdAt, username, profilePic, text}) => {
  return (
    <Flex gap={4}> 
        <Avatar src={profilePic} size={"sm"} name={username} />
        <Flex direction={"column"}>
            <Flex gap={2}>
                <Text fontSize={12} fontWeight={"bold"}>
                    {username}
                </Text>
                <Text fontSize={14}>{text}</Text>
            </Flex>
            <Text fontSize={12} color={"gray"}>
                {createdAt}
            </Text>
        </Flex>
    </Flex>

  )
}

export default Comment