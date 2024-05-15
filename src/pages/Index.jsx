import { Container, VStack, Heading, Text, Box, Flex, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const schedule = [
  {
    time: "09:00 AM",
    title: "Opening Keynote",
    speaker: "Peter",
    location: "Main Hall",
  },
  {
    time: "10:00 AM",
    title: "React Best Practices",
    speaker: "Sofia",
    location: "Room 101",
  },
  {
    time: "11:00 AM",
    title: "Advanced CSS Techniques",
    speaker: "Emily Johnson",
    location: "Room 102",
  },
  {
    time: "01:00 PM",
    title: "State Management with Redux",
    speaker: "Michael Brown",
    location: "Room 103",
  },
  {
    time: "02:00 PM",
    title: "Building Accessible Web Apps",
    speaker: "Sarah Davis",
    location: "Room 104",
  },
  {
    time: "03:00 PM",
    title: "GraphQL for Beginners",
    speaker: "Chris Wilson",
    location: "Room 105",
  },
  {
    time: "04:00 PM",
    title: "Closing Remarks",
    speaker: "Jane Doe",
    location: "Main Hall",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="100%" width="100%" py={10} bg="orange.50">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" color="orange.600">
          FunCon @ Funnel.io
        </Heading>
        <Text fontSize="lg" color="orange.700">
          Join us for a day of fun and learning at FunCon! Check out the schedule below:
        </Text>
        {schedule.map((event, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="yellow.50" w="100%">
            <Flex justify="space-between" align="center">
              <Box>
                <Heading as="h3" size="md" color="orange.800">
                  {event.title}
                </Heading>
                <Text mt={2} color="orange.600">
                  <Icon as={FaClock} mr={2} />
                  {event.time}
                </Text>
                <Text mt={2} color="orange.600">
                  <Icon as={FaMapMarkerAlt} mr={2} />
                  {event.location}
                </Text>
              </Box>
              <Text fontSize="sm" color="orange.500">
                {event.speaker}
              </Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;