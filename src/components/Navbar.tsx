import { Box, Text,  Container, Stack, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const Navbar: React.FC = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <Box boxShadow="md" >
            <Container maxWidth="6xl">
                <Stack 
                    as="nav"
                    paddingY={3}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text
                        textAlign="center"
                        color="green.300"
                        backgroundColor="white"
                        width="15%"
                        fontWeight="bold"
                        cursor="pointer"
                    > 
                        HEALTHY FOODS 
                    </Text>
                    <Button
                        onClick={onOpen}
                        borderRadius="md"
                        color="white"
                        backgroundColor="green.800"
                        borderWidth={1}
                        borderStyle="solid"
                        borderColor="green.200"
                        _hover={{
                            backgroundColor:"white",
                            color: "green.800"
                            
                        }}
                    >
                        Ingresar
                    </Button>
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Iniciar sesión</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Usuario</FormLabel>
                                    <Input placeholder='Usuario' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Contraseña</FormLabel>
                                    <Input type="password" placeholder='Contraseña' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="white" backgroundColor='green.800' mr={3}>
                                    Ingresar
                                </Button>
                                <Button onClick={onClose}>Cancelar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Container>
        </Box>
    );
}

export default Navbar;