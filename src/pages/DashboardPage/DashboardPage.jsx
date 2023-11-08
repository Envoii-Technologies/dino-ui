import React from 'react';

import { PageHeader, Grid, Row, Column, ContentCard, Container, Text, Badge, Divider, Button, Avatar, Heading } from './../../components/../';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment/locale/fr';

export const DashboardPage = ({ isLoading, userData }) => {
    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <PageHeader
                        title={`Willkommen, ${userData.firstname} 👋`}
                    >
                    </PageHeader>

                    <Container scrollable={false}>
                        <Grid fluid={false} style={{ height: "100%" }}>
                            <Row style={{ height: "100%" }}>
                                <Column xlSpan={4} style={{}}>
                                    <ContentCard
                                        title="Karten"
                                        actionIcon={faFilter}
                                        onAction={() => console.log()}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Bedienung der Hydraulikpresse</Text>
                                            <Badge label="Entwurf" status="gray" pill={false} />
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Inbetriebnahme beim Kunden</Text>
                                            <Badge label="1.0" status="success" pill={false} />
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Rüstanweisung Fertigung</Text>
                                            <Badge label="1.1" status="success" pill={false} />
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Montageanweisung</Text>
                                            <Badge label="Entwurf" status="gray" pill={false} />
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Endprüfung Qualität</Text>
                                            <Badge label="1.0" status="success" pill={false} />
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            border: "1px solid #EAECF0",
                                            padding: "1.5rem 1rem",
                                            borderRadius: "0.5rem",
                                        }}>
                                            <Text size="sm" type="bold" style={{ color: "#696D77" }}>Warenausgangsprüfung</Text>
                                            <Badge label="1.2" status="success" pill={false} />
                                        </div>
                                        <Divider>
                                            <Button type="secondary" label="Alle anzeigen" />
                                        </Divider>
                                    </ContentCard>
                                </Column>
                                <Column xlSpan={4}>
                                    <ContentCard
                                        title="Aufgaben"
                                        actionIcon={faFilter}
                                        onAction={() => console.log()}
                                    >
                                        <div
                                            style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid #EAECF0", paddingBottom: "1rem" }}
                                        >
                                            <Avatar size="xl" name="Koray Uygun" />
                                            <div style={{ paddingLeft: "1rem" }}>
                                                <div>
                                                    <Text type="semiBold" style={{ color: "#696D77" }}>Koray Uygun</Text>
                                                    <Text size="sm" style={{ color: "#696D77", paddingLeft: "0.5rem" }}>Gerade eben</Text>
                                                </div>
                                                <Text style={{ color: "#696D77" }}>Bitte Durchführung an Wickler 3 prüfen, Schalter, ist nicht befestigt.</Text>
                                                <div style={{ display: "flex", paddingTop: "1rem" }}>
                                                    <Badge label="Low Priority" color="blue" />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid #EAECF0", paddingBottom: "1rem" }}
                                        >
                                            <Avatar size="xl" name="Frederik Reich" />
                                            <div style={{ paddingLeft: "1rem" }}>
                                                <div>
                                                    <Text type="semiBold" style={{ color: "#696D77" }}>Frederik Reich</Text>
                                                    <Text size="sm" style={{ color: "#696D77", paddingLeft: "0.5rem" }}>Gerade eben</Text>
                                                </div>
                                                <Text style={{ color: "#696D77" }}>Wechselrichter am Montageplatz tauschen.</Text>
                                                <div style={{ display: "flex", paddingTop: "1rem" }}>
                                                    <Badge label="High Priority" color="pink" />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid #EAECF0", paddingBottom: "1rem" }}
                                        >
                                            <Avatar size="xl" name="Koray Uygun" />
                                            <div style={{ paddingLeft: "1rem" }}>
                                                <div>
                                                    <Text type="semiBold" style={{ color: "#696D77" }}>Jan Treffon</Text>
                                                    <Text size="sm" style={{ color: "#696D77", paddingLeft: "0.5rem" }}>Gerade eben</Text>
                                                </div>
                                                <Text style={{ color: "#696D77" }}>Vom Temperatursensor T31 die Spannhülse wechseln.</Text>
                                                <div style={{ display: "flex", paddingTop: "1rem" }}>
                                                    <Badge label="Medium Priority" color="warning" />
                                                </div>
                                            </div>
                                        </div>
                                    </ContentCard>
                                </Column>
                                <Column xlSpan={4}>
                                    <ContentCard>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                                        <Text size="md" style={{ color: '#364052'}}>
                                            <Moment locale='de' format="dddd, DD. MMMM YYYY">
                                                {new Date()}
                                            </Moment>
                                        </Text>
                                        <Heading size="xl" style={{ color: '#364052'}}>
                                            <Moment format="HH:mm">
                                                {new Date()}
                                            </Moment> Uhr
                                        </Heading>
                                        </div>
                                        
                                    </ContentCard>
                                </Column>
                            </Row>
                        </Grid>
                    </Container>
                </div>
            )}
        </>
    );
};
