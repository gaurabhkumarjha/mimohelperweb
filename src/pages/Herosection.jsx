import { Container, Text, Button, Group, Grid, Paper, Title, Pill, Alert } from '@mantine/core';
import classes from './Herosection.css';
import Applelogo from '../Image/apple.png';
import Windowlogo from '../Image/windows.png';
import { useState } from 'react';





const Herosection = () => {

    const [seealert, setalert] = useState(false);
    const Download_setup_for_mac = () => {
        window.location.href = "https://drive.usercontent.google.com/download?id=1OUMsuuflXohs5S_Od1rW1Kzme-g_zuVn&export=download&authuser=1";
        setalert(true);
        setTimeout(() => {
            setalert(false);
        }, 2000);
    }
    const Download_setup_for_win = () => {
        window.location.href = "https://drive.usercontent.google.com/download?id=1bVnU_XTV4yLTdqcpgamhFNknDkfKAV3j&export=download&authuser=1";
        setalert(true);
        setTimeout(() => {
            setalert(false);
        }, 2000);
    }
    return (
        <>
            {
                seealert && <Alert variant="light" color="green" withCloseButton title="Thanks for downloading">
                    Downloading in progress... || Remember Just download and play, no installation required. ||
                </Alert>
            }
            <Container size={'xs'}>
                <div className={classes.wrapper}>
                    <Container size={700} className={classes.inner}>
                        <h1 className={classes.title}>
                            No{' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'orange', to: 'cyan' }} inherit>
                                MUSIC
                            </Text>{' '}
                            No {' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'green', to: 'cyan' }} inherit>
                                LIFE
                            </Text>

                        </h1>

                        <Text className={classes.description} color="dimmed">
                            Kick out old music player! Free download new and advance MIMO music player.
                        </Text>

                        <Group className={classes.controls}>
                            <Button
                                size="xl"
                                className={classes.control}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan' }}
                            >
                                Download here
                            </Button>

                            <Button
                                component="a"
                                href="https://myfolder.netlify.app"
                                size="xl"
                                variant="default"
                                className={classes.control}
                                target='-blank'
                            // leftSection={<GithubIcon size={20} />}
                            >
                                Rhombus
                            </Button>
                        </Group>
                    </Container>
                </div>
            </Container>
            <Container size={'xs'}>
                <Alert variant="light" color="cyan" title="Remember" radius="lg" mt={'md'}>Just download and play, no installation required.</Alert>
                <Grid mt={'lg'}>
                    <Grid.Col span={6}>
                        <Paper shadow="md" p="xl" radius="md" style={{
                            height: "rem(440px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${Windowlogo})`
                        }}>
                            <div>
                                <Pill style={{
                                    fontWeight: 700,
                                    textTransform: "uppercase"

                                }} size="xs">
                                    For Windows
                                </Pill>
                                <Title order={3} style={{
                                    fontFamily:
                                        "'Greycliff CF', var(--mantine-font-family)",
                                    fontWeight: 900,
                                    color: "var(--mantine-color-white)",
                                    lineHeight: 1.2,
                                    fontSize: "rem(32px)",
                                    marginTop: "var(--mantine-spacing-xs)"
                                }}>
                                    <h3 style={{ color: 'black' }}>Take your Music-player with you</h3>
                                </Title>
                            </div>
                            <Button variant="white" color="dark" onClick={Download_setup_for_win} target="-blank">
                                Download
                            </Button>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Paper shadow="md" p="xl" radius="md" style={{
                            height: "rem(450px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${Applelogo})`
                        }}>
                            <div>
                                <Pill style={{
                                    fontWeight: 700,
                                    textTransform: "uppercase"

                                }} size="xs">
                                    For MAC
                                </Pill>
                                <Title order={3} style={{
                                    fontFamily:
                                        "'Greycliff CF', var(--mantine-font-family)",
                                    fontWeight: 900,
                                    color: "var(--mantine-color-white)",
                                    lineHeight: 1.2,
                                    fontSize: "rem(32px)",
                                    marginTop: "var(--mantine-spacing-xs)"
                                }}>
                                    <h3 style={{ color: 'whitesmoke' }}>Take your Music-player with you</h3>
                                </Title>
                            </div>
                            <Button variant="white" color="dark" onClick={Download_setup_for_mac} target="-blank">
                                Download
                            </Button>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container >

        </>
    )
}
export default Herosection;
