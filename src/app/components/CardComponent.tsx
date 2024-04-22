import React from 'react';
import {Box, Button, Card, Flex, Separator, Text} from "@radix-ui/themes";

const CardComponent = () => {
    return (
        <Card size="1">
            <Flex mb="2" position="relative">
                <img
                    width="280"
                    height="270"
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80"
                    style={{ borderRadius: 'var(--radius-1)' }}
                    alt={''}/>

                <Flex
                    align="center"
                    justify="center"
                    position="absolute"
                    bottom="0"
                    right="0"
                    width="32px"
                    height="32px"
                    style={{ borderRadius: 'var(--radius-3)' }}
                    m="2"
                >
                    {/*<IconButton*/}
                    {/*    size="2"*/}
                    {/*    color="gray"*/}
                    {/*    variant="ghost"*/}
                    {/*>*/}
                    {/*</IconButton>*/}
                </Flex>
            </Flex>

            {/*<Flex align="end" justify="between" mb="2">*/}
            {/*    /!*<Box>*!/*/}
            {/*    /!*    <Flex mb="1">*!/*/}
            {/*    /!*        <Link*!/*/}
            {/*    /!*            href="#"*!/*/}
            {/*    /!*            underline="hover"*!/*/}
            {/*    /!*            size="2"*!/*/}
            {/*    /!*            color="gray"*!/*/}
            {/*    /!*            highContrast*!/*/}
            {/*    /!*        >*!/*/}
            {/*    /!*            Footwear*!/*/}
            {/*    /!*        </Link>*!/*/}
            {/*    /!*    </Flex>*!/*/}

            {/*    /!*    <Heading as="h3" size="3">*!/*/}
            {/*    /!*        Sneakers #12*!/*/}
            {/*    /!*    </Heading>*!/*/}
            {/*    /!*</Box>*!/*/}

            {/*    <Text size="6" weight="bold">*/}
            {/*        $149*/}
            {/*    </Text>*/}
            {/*</Flex>*/}

            <Text as="p" size="2" color="gray" mb="4">
                Love at the first sight for enthusiasts seeking a fresh and whimsical style.
            </Text>

            <Box>
                <Separator size="4" my="4" />
            </Box>

            <Flex gap="2" align="end">
                <Flex direction="column" flexGrow="1">

                    <Text size="1" color="gray" mb="1">
                        Color
                    </Text>

                    {/*<Select.Root defaultValue="Pastel" size="2">*/}
                    {/*    <Select.Trigger  variant="soft" />*/}
                    {/*    <Select.Content variant="soft" position="popper">*/}
                    {/*        <Select.Item value="Pastel">Pastel</Select.Item>*/}
                    {/*        <Select.Item value="Bright">Bright</Select.Item>*/}
                    {/*    </Select.Content>*/}
                    {/*</Select.Root>*/}
                </Flex>

                <Flex direction="column" minWidth="80px">
                    {/*<Label asChild>*/}
                    {/*    <Text size="1" color="gray" mb="1">*/}
                    {/*        Size*/}
                    {/*    </Text>*/}
                    {/*</Label>*/}
                    {/*<Select.Root defaultValue="8" size="2">*/}
                    {/*<Select.Trigger tabIndex={tabIndex} variant="soft" />*/}
                    {/*<Select.Content variant="soft" container={portalContainer} position="popper">*/}
                    {/*    {Array.from({ length: 12 }, (_, i) => (*/}
                    {/*        <Select.Item key={i} value={String(i * 0.5 + 5)}>*/}
                    {/*            {i * 0.5 + 5}*/}
                    {/*        </Select.Item>*/}
                    {/*    ))}*/}
                    {/*</Select.Content>*/}
                    {/*</Select.Root>*/}
                </Flex>

                <Button  size="2" variant="solid" color="gray" highContrast>
                    Buy
                </Button>
            </Flex>
        </Card>
    );
};

export default CardComponent;