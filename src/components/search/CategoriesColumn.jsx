import { useContext } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    Divider,
    FormControlLabel,
    List,
    ListItem,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { GroupContext } from "../../context/groupContext";

function CategoriesColumn() {
    const {
        tags,
        handleSelect,
    } = useContext(GroupContext);

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    open
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography component={"h6"} variant="h6">انتخاب گروه</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {tags.slice(0, 15).map((tag) => (
                            <div key={`tag${tag.slug}`}>
                                <ListItem>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={(event) =>
                                                    handleSelect(event.target.checked, tag)
                                                }
                                            />
                                        }
                                        label={tag.name}
                                    />
                                </ListItem>
                                <Divider variant="middle" sx={{ bgcolor: "gray" }} />
                            </div>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CategoriesColumn;
