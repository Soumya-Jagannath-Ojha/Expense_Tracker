import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExpenseView = ({ type, data }) => {
  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
        
      </Flex>
      {data.map((item) => (
          <>
            <Flex
              bg={type === "income" ? "blue.50" : "red.50"}
              mt={"4"}
              justifyContent={"space-around"}
              alignItems={"center"}
              border={"1px solid"}
              borderColor={type === "income" ? "blue.100" : "red.100"}
              p={"4"}
              borderRadius={"8"}
            >
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text ml={"3"} fontWeight={"bold"} color={"gray.600"}>
                  {item.description}
                </Text>
              </Flex>

              <Text>$ {item.amount}</Text>
            </Flex>
          </>
        ))}
    </Box>
  );
};

export default ExpenseView;
