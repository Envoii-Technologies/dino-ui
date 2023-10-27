import React, { useState } from 'react';

import {
    Breadcrumb,
    Button,
    ButtonGroup,
    LoadingIndicator,
    PageHeader,
    Tabs,
    TabItem,
    Container,
    Input,
    ContentRow,
    Checkbox,
    SelectBox,
    TextArea,
} from './../../';

import {
    faEllipsisVertical,
    faRocket,
    faPlus,
    faQrcode,
} from '@fortawesome/free-solid-svg-icons';

import './CardEditorPage.scss';

export const CardEditorPage = ({ isLoading, tagData, currentTab, onSave, }) => {
    return (
        <>
            {isLoading ? (
                <LoadingIndicator showLabel={true} />
            ) : (
                <>
                    <header>
                        <PageHeader
                            title="Bedienung der Hydraulikpresse"
                            location="/acme/Karten/Hydraulikpresse"
                        >
                            <ButtonGroup>
                                <Button label="Speichern" type="secondary" onClick={onSave} />
                                <Button
                                    label="Veröffentlichen"
                                    iconRight={faRocket}
                                />
                                <Button
                                    iconLeft={faEllipsisVertical}
                                    type="secondary"
                                />
                            </ButtonGroup>
                        </PageHeader>
                    </header>
                    <Tabs currentSelected={currentTab || 0}>
                        <TabItem title="Schritte">
                            <Container>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Provident impedit sed,
                                praesentium explicabo est beatae placeat omnis
                                rerum cupiditate error in nostrum quia maxime
                                vitae quod commodi at, delectus consequuntur.
                                Consequatur quam, sed suscipit perferendis quia
                                corporis modi architecto maiores ipsa quae,
                                excepturi dolorum amet a accusamus at error
                                odit. Commodi inventore perferendis modi sequi
                                sunt repellendus officia cumque id. Saepe
                                consequuntur facilis aspernatur, tenetur quos
                                voluptate ea laboriosam vero cumque similique
                                quod nobis quaerat quia hic tempore voluptatum
                                eius eum aliquid. Sunt inventore adipisci quidem
                                ipsam alias, nihil dignissimos? Quidem
                                quibusdam, deleniti tempore nisi quam, debitis
                                sapiente exercitationem recusandae consectetur
                                ipsum eius quas. Commodi voluptate tempore qui,
                                eum reprehenderit nemo expedita placeat,
                                delectus, alias minima totam iusto optio id? Aut
                                aliquid nobis corporis explicabo laborum.
                                Praesentium architecto magnam asperiores minus
                                ut magni consequuntur, ex quo maxime obcaecati
                                incidunt, non possimus officiis cumque earum sit
                                sed aliquid fugiat, tempore at. Tenetur placeat,
                                odit magnam dolorum ipsam, quae optio repellat
                                necessitatibus nulla laudantium tempore maxime
                                suscipit voluptates eum ullam facilis, libero
                                explicabo eaque? Eius laborum assumenda
                                voluptate deleniti rem impedit? Minus. Ex
                                quisquam explicabo labore voluptas quis esse
                                aperiam reprehenderit officiis magnam dolor
                                corrupti sunt animi repellat voluptate eius,
                                consequuntur eum minus. Qui asperiores, eligendi
                                doloribus ratione consectetur voluptatibus
                                nulla! Blanditiis. Ratione modi maxime iusto
                                laudantium fugit dolore consectetur eum tempore
                                velit autem cum architecto a excepturi,
                                necessitatibus atque error magnam ducimus. Modi
                                nam asperiores distinctio, unde voluptatem est
                                neque quia. Dicta recusandae, nisi dolorem
                                accusamus consectetur temporibus repellendus
                                numquam itaque vel, cumque porro quam libero
                                error pariatur deleniti doloribus ea voluptas
                                nulla ducimus tenetur ipsam provident commodi
                                esse? Harum, dolores! Pariatur itaque omnis
                                perspiciatis consequuntur praesentium, repellat
                                blanditiis expedita libero necessitatibus
                                consequatur, vel provident nihil. Quasi nulla
                                minus ducimus odio impedit fugit nemo
                                praesentium aperiam, saepe deleniti, ipsam
                                veniam! Nostrum. Asperiores amet ab nisi quod
                                facilis reiciendis placeat, expedita libero
                                delectus? Molestias ullam atque amet odio
                                aliquid nihil asperiores debitis distinctio
                                ipsam commodi vitae animi voluptate
                                exercitationem, voluptates nam praesentium.
                                Alias nulla fugiat voluptatum vero doloribus,
                                itaque nobis, et tempora praesentium doloremque
                                vitae voluptatibus mollitia incidunt consequatur
                                sed corrupti molestias porro laudantium quasi
                                harum ducimus, temporibus reprehenderit. Quidem,
                                vitae ea. Ullam dolorum pariatur incidunt
                                consequatur natus autem molestiae? Porro
                                sapiente odit modi eaque ipsam, unde quidem
                                quisquam exercitationem quia dolore dolorem
                                quibusdam laboriosam, ea in at esse minus.
                                Fugit, dignissimos. Dolor ratione ullam minima
                                neque, maiores at veritatis fugit qui ipsam
                                debitis incidunt ad adipisci. Commodi sint,
                                consequatur eos officia deserunt nisi quia
                                aperiam culpa praesentium quibusdam odit.
                                Veniam, iste. Eos necessitatibus temporibus
                                dicta iure perferendis aliquam quia quidem
                                laborum recusandae neque excepturi nobis optio
                                quae aperiam, impedit dolorem aliquid sequi
                                expedita possimus voluptatibus corporis! Vel eum
                                cumque aperiam repudiandae! Minus consequatur
                                omnis modi quis id enim voluptates alias esse
                                commodi quia! Excepturi libero dolorem illo
                                nostrum et, id exercitationem autem dolores
                                provident quos ea corporis consequatur!
                                Voluptates, sequi similique! Odio, enim
                                reprehenderit sunt fugit magnam perferendis
                                recusandae neque voluptatum repellat, assumenda,
                                consequatur quaerat sapiente. Officia, autem
                                eligendi voluptates id alias facere assumenda
                                quo beatae? Odit reiciendis voluptatum placeat.
                                Tempore? Rerum dolorem molestias, delectus et
                                minus possimus iste doloremque eveniet quo
                                voluptatibus unde, ipsam similique optio a
                                necessitatibus harum officiis nisi deleniti.
                                Odit, sed debitis. Recusandae quisquam deleniti
                                libero eum? Natus sint suscipit minima fuga
                                voluptate nulla similique amet? Earum quas
                                consequuntur cupiditate voluptas tempora iure
                                cumque minus iste assumenda asperiores tenetur
                                impedit, delectus ullam, fugit exercitationem
                                aspernatur, magnam sequi? Eos quas modi quia
                                autem nisi maxime praesentium obcaecati?
                                Laudantium optio vero dolorum? Cupiditate,
                                aspernatur. Maxime in quam, explicabo at beatae
                                similique, nulla voluptatibus voluptates a rerum
                                est incidunt dolor? Vitae aspernatur blanditiis
                                similique corrupti aliquid eveniet tempora?
                                Deserunt dicta sequi temporibus corporis
                                sapiente, minus mollitia alias eligendi culpa
                                placeat eius corrupti quis eum vel incidunt
                                ducimus? Magnam, eius ducimus. Ipsa ex eum
                                doloribus ad ipsam ipsum porro beatae commodi
                                animi aspernatur eveniet cumque praesentium
                                reiciendis necessitatibus atque dolores
                                quibusdam optio dignissimos, culpa, nisi quam
                                eaque earum! Magni, enim repudiandae? Itaque
                                dolorem tempora libero cum. Qui inventore
                                facilis cum sint atque! Perferendis delectus
                                repellat reprehenderit! Nisi consequuntur odio
                                doloribus necessitatibus hic, quia distinctio
                                laboriosam dolore, consectetur facere fugiat at
                                deleniti? Inventore laboriosam illum voluptates
                                nisi praesentium illo fuga reiciendis
                                perspiciatis consequuntur dolorem, cupiditate
                                tenetur eligendi ullam eaque architecto dolores.
                                At dolores maiores eum cupiditate harum? Nostrum
                                fugit ab eum delectus. Rem animi magnam dolorum,
                                fugit eum tenetur quam enim, blanditiis aliquam
                                accusamus nam expedita placeat, minima
                                repellendus porro omnis voluptate nostrum
                                temporibus suscipit voluptas laudantium dicta?
                                Eos, adipisci. Corrupti, laudantium. Soluta
                                officia laboriosam, distinctio atque voluptate
                                molestias dolor ipsam deserunt quaerat eius
                                suscipit? Dolore necessitatibus, similique,
                                ducimus autem nostrum vel laborum maxime
                                perspiciatis inventore amet et porro consequatur
                                beatae deserunt. Vero odio facere maxime amet
                                vel? Asperiores accusantium id blanditiis,
                                delectus rem possimus hic molestiae consequatur
                                voluptates saepe sunt natus totam amet porro
                                labore laudantium sint adipisci doloremque
                                itaque? In. Sit quasi quas in qui vel expedita
                                vitae consequuntur optio quia, magnam delectus
                                exercitationem consequatur quo recusandae, quis
                                iure! Quae facilis rerum temporibus laboriosam
                                aliquam corporis molestiae sequi blanditiis!
                                Assumenda? Quaerat expedita harum soluta amet ad
                                et ipsam velit temporibus nesciunt officiis a
                                neque esse incidunt deleniti, nisi perspiciatis
                                aliquam fuga placeat in voluptas. Praesentium
                                minus omnis autem a officia. Eligendi, commodi.
                                Quod magni, odio blanditiis beatae soluta vitae
                                earum consequatur corrupti optio dolore nam, ab
                                sint, quasi sunt? Inventore impedit rem corrupti
                                velit quasi sit tenetur ullam saepe aliquam!
                            </Container>
                        </TabItem>
                        <TabItem title="Informationen">
                            <Container>
                                <ContentRow>
                                    <Input label="Erstellt von" disabled={true} value="Benutzer ID"/>
                                </ContentRow>

                                <ContentRow>
                                    <SelectBox multi={true} label="Tags" options={tagData}/>
                                </ContentRow>

                                <ContentRow>
                                    <Input label="Klassifizierung" disabled={true}/>
                                </ContentRow>

                                <ContentRow>
                                    <Input label="Fälligkeit" />
                                </ContentRow>

                                <ContentRow>
                                    <TextArea label="Notizen"/>
                                </ContentRow>

                                <ContentRow>
                                    <Button
                                        label="QR-Code hinzufügen"
                                        isDisabled={true}
                                        type="secondary"
                                        iconLeft={faPlus}
                                        iconRight={faQrcode}
                                    />
                                </ContentRow>

                                <ContentRow divider={false}>
                                    <Checkbox title="Karte für andere sichtbar machen" />
                                </ContentRow>
                            </Container>
                        </TabItem>
                    </Tabs>
                </>
            )}
        </>
    );
};
